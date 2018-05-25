<template>
    <div>
        <div class="contactus-frm" id="dialog-contactus" title="" style="display:none">
            <div  class="contactus-frm-sub">
                <!-- SharpSpring Form for Contact Us  -->

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HelloWorld",
        data() {
            return {
                msg: "Welcome to Your Vue.js App",
                ss_form: ''
            };
        },
        created() {
            let recaptchaScript = document.createElement('script')
            recaptchaScript.setAttribute('src', 'https://koi-3QN79Q601A.marketingautomation.services/client/form.js?ver=1.1.1')
            document.head.appendChild(recaptchaScript)
            this.ss_form = {'account': 'MzawMDE1NTCwBAA', 'formID': 'M002NEg1T7PQNU40TNY1SUsx0bU0MkvStTCzTEsxSjNNSjNPBgA'};
            this.ss_form.width = '50%';
            this.ss_form.height = '1000';
            this.ss_form.domain = 'app-3QN79Q601A.marketingautomation.services';
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1,
    h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
