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
  { name: "beforeCreateHook", directive: beforeCreate },
  { name: "createdHook", directive: created },
  { name: "beforeMountHook", directive: beforeMount },
  { name: "mountedHook", directive: mounted },
  { name: "beforeUpdateHook", directive: beforeUpdate },
  { name: "updatedHook", directive: updated },
  { name: "beforeUnmountHook", directive: beforeUnmount },
  { name: "unmountedHook", directive: unmounted }
];
