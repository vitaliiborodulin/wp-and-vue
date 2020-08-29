<template>
    <app-404 v-if="err404" text="Post not found!"></app-404>
    <app-loading v-else-if="loading"></app-loading>
    <div class="post" v-else>
        <h1>{{ post.title.rendered }}</h1>
        <hr>
        <router-link to="/">Back to all posts</router-link>
        <hr>
        <div v-html="post.content.rendered"></div>
    </div>
</template>

<script>
    import server from '@/server';
    import AppLoading from '@/components/Loading';
    import App404 from '@/components/E404';

    export default {
        components: {
            AppLoading, 
            App404
        },
        data(){
            return {
                post: null,
                err404: false
            }
        },
        computed: {
            loading(){
                return this.post ===  null;
            },
            id(){
                return this.$route.params.id;
            }
        },
        created(){
            server.get(`wp/v2/posts/${this.id}`).then(response => {
                this.post = response.data; // selected case from data
            }).catch(e => {
                this.err404 = true;
            });
        }
    }
</script>
