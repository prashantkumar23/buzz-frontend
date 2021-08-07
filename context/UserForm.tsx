import { ReactNode, createContext, useReducer, useContext } from "react";
import { IUserInfo } from "../types/interfaces/FormInterface";

type State = {
  userInfo: IUserInfo;
};

type Action = { type: "verifyOTP"; payload: string };

type Dispatch = (action: Action) => void;

type UserFormProviderProps = { children: ReactNode };

const initialState: State = {
  userInfo: {
    email: "",
    phoneNumber: "",
    fullname: "",
    otp: "",
    otpVerified: false,
    profilePicLink: "",
    username: "",
  },
};

const UserFormContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

const userFormReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "verifyOTP": {
      return {
        ...state,
      };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
};

const UserFormProvider = ({ children }: UserFormProviderProps) => {
  const [state, dispatch] = useReducer(userFormReducer, initialState);
  const value = { state, dispatch };
  return (
    <UserFormContext.Provider value={value}>
      {children}
    </UserFormContext.Provider>
  );
};

const useUserForm = () => {
  const context = useContext(UserFormContext);
  if (context) {
    return context;
  }
  throw new Error("useUserForm must be used within a UserFormProvider");
};

export { UserFormProvider, useUserForm };
