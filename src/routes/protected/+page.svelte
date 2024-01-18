<script lang="ts">
	/*buggy code: if import fails to load here the console prints Error: "Cache-Control" header is already set but
    there is no information about the error that caused this. 
    */

	import * as Card from 'card-validator';

	/*
    Comment the previous import and uncomment the import below and the error goes away.
    */
	//import Card from 'card-validator';

	//The main issue here is that the error does not give information about the error that caused this.

	const card = Card.number('4242 4242 4242 4242');
</script>

Protected Route

<style>
</style>
