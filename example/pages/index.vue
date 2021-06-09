<template>
  <div>
    <video id="videoElement" width="320" height="240" controls>
      <source
        src="https://s3-ap-northeast-1.amazonaws.com/daniemon/demos/The%2BVillage-Mobile.mp4"
        type="video/mp4"
      >
      Your browser does not support the video tag.
    </video>
    <span>
      {{ visible }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    visible () {
      return this.$visibility.isVisible
    }
  },
  watch: {
    $visibility: {
      handler (val) {
        const videoElement = document.getElementById('videoElement')

        if (val.isVisible) {
          videoElement.play()
        } else {
          videoElement.pause()
        }
      },
      deep: true
    }
  }
}
</script>
