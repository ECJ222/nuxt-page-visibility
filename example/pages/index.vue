<template>
  <div class="container">
    <div>
      <h1 class="title">
        demo
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  watch: {
    $visibility: {
      handler (page) {
        if (page.isVisible) {
          // do something
        } else {
          // do something
        }
      },
      deep: true
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
