<template>
    <div>
        <h1>{{ title }} got {{ likes + 1 }}</h1>
    </div>
</template>

<script>
export default {
  props: {
    title: String,
    likes: Number
  }
}
</script>