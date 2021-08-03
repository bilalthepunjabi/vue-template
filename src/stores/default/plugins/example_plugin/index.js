const example_plugin = (store) => {
    // called when the store is initialized
    store.subscribe((mutation, state) => {
        console.info("VUEX_MUTATION_LOGGER",mutation);
      // called after every mutation.
      // The mutation comes in the format of `{ type, payload }`.
    })

    store.subscribeAction((action,state)=>{
      console.info("VUEX_ACTION_LOGGER",action);
    })
  }

export default example_plugin;