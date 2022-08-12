<template>
    <div>
        <h1>{{ title }} is {{ value }}</h1>
    </div>
</template>

<script>
export default {
  props: {
    title: String,
    value: Number
  }
}
</script>