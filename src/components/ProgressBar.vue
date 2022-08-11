<template>
    <div>
        <h1>Progress: {{ ''.padEnd(progress,'#') }}</h1>
    </div>
</template>

<script>
export default {
    props: ['progress']
}
</script>