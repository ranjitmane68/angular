import { createAction } from "@ngrx/store";

//Specify identifier to action
//Convention : [FeatureName] ActionName
export const increment = createAction('[Counter] Increment');