    import { createContext } from "react";

    export const AuthContext = createContext({});

    export const AuthProvider = ({ children }) => {
     const [user, setUser] = useState ();

    useEffect(() =>{
     const userToken = localStorage.getItem("user_token");
     const usersStorage = localStorage.getItem("users_db");

    if (userToken && userStorage) {
      const hasUser = JSON.parse(usersStorage)?.filter(
        (user) => user.email ===JSON.parse(userToken).email
    );
      if (hasUser) setUser(hasUser[0]);
        }
      }, []);
        
        const signin = (email, password) => {
        const userstorage = JSON.parse(localstorage.getItem("users_db"));

        const hasuser = userStorage?.filter((user) => user.email === email);

        if (hasUser?.length) {
            if (hasUser[0].email === email && hasUser[0].password === password) {
                const token = Math.randon().tosString(36).substring(2);
                localStorage.setItem("user_token", JSON.stringify({email, token}));
                setUser({ email, password });
                return;
            } else {
                return "E-mail ou senha incorretos";
            } 
            } else {
                return "Usuário não cadastrado";
            }
        };

         const signup = (email, password) => {
           
            const usersStorage = JSON.parse(localStorage.getItem("users_db"));
            const hasUser = usersStorage?.filter((user) => user.email ===email);

            if (hasUser?.length) {
                return "Já existe uma conta com esse E-mail";
            }
            let newUser;
            if (usersStorage) {
                newUser = [...usersStorage, {email, password}];
            } else {
                newUser = [{email, password}];
            }
            localStorage.setItem("users_db", JSON.stringify(newUser));
            return;
         };

          return <AuthContext.Provider>{children}</AuthContext.Provider>;
    };
     