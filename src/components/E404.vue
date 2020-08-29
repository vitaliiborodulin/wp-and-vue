<template>
   <div>
        <h1>Page not found</h1>
        <hr>
        <div class="alert alert-warning">{{ text }}</div>
        <hr>
        Start from <router-link to="/">main page</router-link>
   </div>
</template>

<script>
    export default {
        props: {
            text: {
                type: String,
                required: true
            }
        }
    }
</script>