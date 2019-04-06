<template>
    <div class="welcome">
        this is welcome
        <div class="container">
            <label>File
                <input type="file" id="file" ref="file"
                       v-on:change="handleFileUpload()"/>
            </label>
        </div>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    import {SET_ZIP} from "../store/mutations";

    export default {
        name: "Welcome",
        data() {
            return {
                file: null
            }
        },
        methods: {
            ...mapMutations([SET_ZIP]),
            handleFileUpload() {
                const file = this.$refs.file.files[0];
                this.setZip(file)
            }
        }
    }

</script>

<style scoped>

</style>