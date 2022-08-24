import User from "model/User";
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import firebase from "../../firebase/config";
import router from "next/router";
import Cookies from "js-cookie";

type AuthContextProps = {
  user?: User;
  loading?: boolean;
  register?: (email: string, password: string) => Promise<void>;
  login?: (email: string, password: string) => Promise<void>;
  googleLogin?: () => Promise<void>;
  logout?: () => Promise<void>;
};

const AuthContext = createContext<AuthContextProps>({});

const getNormalizedUser = async (
  firebaseUser: firebase.User
): Promise<User> => {
  const token = await firebaseUser.getIdToken();
  return {
    uid: firebaseUser.uid,
    name: firebaseUser.displayName,
    email: firebaseUser.email,
    token,
    provider: firebaseUser.providerData[0].providerId,
    imageUrl: firebaseUser.photoURL,
  };
};

const manageCookie = (loggedIn: boolean) => {
  if (loggedIn) {
    Cookies.set("next-admin-template-01-auth", loggedIn, { expires: 7 });
  } else {
    Cookies.remove("next-admin-template-01-auth");
  }
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const sessionConfig = useCallback(
    async (firebaseUser: firebase.User): Promise<string | boolean> => {
      if (firebaseUser?.email) {
        const user = await getNormalizedUser(firebaseUser);

        setUser(user);
        manageCookie(true);
        setLoading(false);

        return user.email;
      } else {
        setUser(null);
        manageCookie(false);
        setLoading(false);

        return false;
      }
    },
    []
  );

  useEffect(() => {
    if (!Cookies.get("next-admin-template-01-auth")) return;

    const cancel = firebase.auth().onIdTokenChanged(sessionConfig);

    return () => cancel();
  }, [sessionConfig]);

  const register = useCallback(
    async (email: string, password: string) => {
      try {
        setLoading(true);
        const response = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);

        await sessionConfig(response.user);
        router.push("/");
      } finally {
        setLoading(false);
      }
    },
    [sessionConfig]
  );

  const login = useCallback(
    async (email: string, password: string) => {
      try {
        setLoading(true);
        const response = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);

        await sessionConfig(response.user);
        router.push("/");
      } finally {
        setLoading(false);
      }
    },
    [sessionConfig]
  );

  const googleLogin = useCallback(async () => {
    try {
      setLoading(true);
      const response = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());

      await sessionConfig(response.user);
      router.push("/");
    } finally {
      setLoading(false);
    }
  }, [sessionConfig]);

  const logout = useCallback(async () => {
    try {
      setLoading(true);
      await firebase.auth().signOut();
      await sessionConfig(null);
    } finally {
      setLoading(false);
    }
  }, [sessionConfig]);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        register,
        login,
        googleLogin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
