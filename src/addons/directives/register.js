//global file for registering of any directives

import beforeCreate from "./lifecycle/beforeCreate";
import created from "./lifecycle/created";
import beforeMount from "./lifecycle/beforeMount";
import mounted from "./lifecycle/mounted";
import beforeUpdate from "./lifecycle/beforeUpdate";
import updated from "./lifecycle/updated";
import beforeUnmount from "./lifecycle/beforeUnmount";
import unmounted from "./lifecycle/unmounted";

export default [
  //register directives you want to use globally
  { name: "beforeCreate", directive: beforeCreate },
  { name: "created", directive: created },
  { name: "beforeMount", directive: beforeMount },
  { name: "mounted", directive: mounted },
  { name: "beforeUpdate", directive: beforeUpdate },
  { name: "updated", directive: updated },
  { name: "beforeUnmount", directive: beforeUnmount },
  { name: "unmounted", directive: unmounted }
];
