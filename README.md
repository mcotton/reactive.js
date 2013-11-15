### REACTIVE.js ###

This is my take on making a reactive library for JavaScript.  It allows you to `watch` a varible and then trigger a callback whenever it changes.  You can see the demo http://jsfiddle.net/mcotton/FSWS4/

#### API ####

    get(key)

This returns the key object.

    getValue(key)
    
This just returns the value.
    
    set(key, val, cb)
    
This creates a new key and stores the value and callback.

	set(key, val)
	
This updates an existing key and calls the callback stored for it.
    
    watch(key, cb)
    
The creates/updates a key with the callback.   
    
    unwatch(key)
    
Removes key from watch list.
