<template>
    <button :class="color + ' w-10 h-10 m-1 rounded-full text-2xl font-bold'" @click="$emit('clicked')">{{ sign }}</button>
</template>

<script>
export default {
    props: ['color','sign']
}
</script>