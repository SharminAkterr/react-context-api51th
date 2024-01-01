/*
------------------- context api ------------------
* 1. createContext
* 2. provider
* 3. set value
* 4. useContext
*

------------- private route/ protected route / auth guard ------------

 * 1. first e private route akta file create krte hbe. etar moddheo children property thakbe.
 * 2. cz, use context diye user ke anbo
 * 3. then, user jodi thake tahole je children e jete chay jete jawa jabe.
 * 4. na thakle log in page e chole jabe.
 * 5. then main.jsx er route evabe set krte hbe: 
            {
                path: "/order",
                element: <PrivateRoute><Order></Order></PrivateRoute>
            }


-------------------- loading state --------------------
* 1. shob sign in login logout every auth gula te laoding state true thakbe, cz api te laoding hoye shob check kore data show kore.
* 2. useEffect er vitor user er value set howar poe loading state false hbe.cz, shob check kore on auth change set howar por redirect of hbe tokhn loading state state shesh hoye output show krbe. 
* 3.authprovider e set krte hbe loading state and use context diye  order component e condition diye loading spinner show krte hbe.

-------------------- Form reset --------------------
* 1. e.target.reset() call korbo jokhn handleform er vitor result.user peye jabo. 
* 2. useNavigate : also navigate("/") dile home e niye jabe .
* 3. jegula only login hole component dekhabe: nav e jeye condition dite hbe user thakle show krbe option. and route.jsx e jeye private route er under e dile log in chara access kora jabe na.
*


-------------------- Google Account log in set --------------------
* 1. auth provider e function set and component er outside googleProvider set
* 2. form er button e onclick set and call there auth provider function
* 3. 
*
***/