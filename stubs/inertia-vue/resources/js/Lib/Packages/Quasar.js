import "quasar/dist/quasar.sass";
import "@quasar/extras/material-icons/material-icons.css";

import {
  Dialog,
  Loading,
  Dark,
  Screen,
  Notify,
  AppVisibility,
  Quasar,
} from "quasar";

export default function (app) {
  return Quasar.install(app, {
    plugins: {
      Dialog,
      Loading,
      Dark,
      Screen,
      Notify,
      AppVisibility,
    },
  });
}
