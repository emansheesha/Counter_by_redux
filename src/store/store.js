import { createStore} from "redux";
import { reducer } from "../reducer/reducer";
// 1
export const store = createStore(reducer);