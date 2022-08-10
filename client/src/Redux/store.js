import { configureStore } from "@reduxjs/toolkit";

import horses from "./horses/horsesSlice";

export const store = configureStore({
    reducer: {
      horses,
  },
});
