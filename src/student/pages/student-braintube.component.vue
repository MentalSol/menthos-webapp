<template>
  hola

  <div v-for="video in videos" >
    {{video.id}}
    <div>
      <img src="{{video.url}}" alt="portada de video">

    </div>
    <div>
      {{video.name}}
  </div>
  </div>
</template>

<script>
import {VideosApiServices} from "@/menthos/services/video/videos-api.services";

export default {
  name: "student-braintube.component.vue",
  data(){
    return{
      videos: [],
      videosService: null,
    }
  },
  created() {
    this.videosService = new VideosApiServices();
    this.getVideos();
  },
  methods:{
    getVideos(){
      this.videosService.getVideos().then((response)=>{
        this.videos=response.data;
        console.log(this.videos);
      });
    },
  }
}
</script>

<style scoped>

</style>