<template>
  <div class="home">
    <h1>Main Page</h1>
    <hr>
    <app-loading v-if="loading"></app-loading>
    <div class="row" v-else>
        <div class="col col-12 col-md-4 mt-3 mb-3" v-for="post in posts" :key="post.id">
            <div class="card h-100">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">{{ post.title }}</h5>
                    <div class="card-text mb-auto" v-html="post.excerpt"></div>
                    <router-link :to="`post/${post.id}`">Read more</router-link>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  import server from '@/server';
  import AppLoading from '@/components/Loading';

  export default {
    components: {
        AppLoading,
    },
    data(){
        return {
            posts: null
        }
    },
    computed: {
        loading(){
            return this.posts === null;
        }
    },
    created(){
        server.get('wp/v2/posts?order=asc').then(response => {
            this.posts = response.data.map(post => ({
                id: post.id,
                title: post.title.rendered,
                excerpt: post.excerpt.rendered
            }));
        });
    }
  }
</script>
