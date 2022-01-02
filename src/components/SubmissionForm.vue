<template>
    <form>
        <fieldset>
            <section>
                <label for="nameOfRole">Name Of Role</label>
                <input required="required" type="text" name="nameOfRole" placeholder="Software Developer">
            </section>

            <section>
                <label for="jobTitle">Job Title</label>
                <input required="required" type="text" name="jobTitle" placeholder="Web Developer">
            </section>

            <section>
                <label for="companyName">Company Name</label>
                <input required="required" type="text" name="companyName" placeholder="RedHat">
            </section>

            <input @click="handleFormSubmit" type="submit" value="Submit">
        </fieldset>
    </form>
</template>

<script>
import axios from 'axios';
import download from 'downloadjs';

export default {
    name: 'SubmissionForm',
    data() {
        return {
            PDF_REQUEST_URL: 'https://autocv.herokuapp.com/generate',
            submissionForm: null,
            pdfRequest: null
        }
    },
    methods: {
        handleFormSubmit: function(event) {
            event.preventDefault();

            // Show loading screen
            this.$store.state.showLoadingScreen = true;

            const jobTitle = this.submissionForm[2].value;
            const jobTitleDelim = jobTitle.split(" ");
            
            // Instantiate PDF request
            const pdfURL = new URL(this.PDF_REQUEST_URL);
            pdfURL.search = new URLSearchParams({
                nameOfRole: this.submissionForm[1].value,
                jobTitleStart: jobTitleDelim[0],
                jobTitleEnd: jobTitleDelim[1],
                companyName: this.submissionForm[3].value
            }).toString();

            const reqConfig = {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/pdf'
                },
                responseType: 'blob'
            }

            axios.get(pdfURL.toString(), reqConfig)
            .then(response => {
                console.log(response);
                const filename = response.request.getResponseHeader('Content-Disposition').
                    replace('attachment; filename="', "").replace('"', "");
                const mimeType = response.headers['content-type'];

                download(response.data, filename, mimeType);
                this.clearFormInputs();

                // Hide loading screen
                this.$store.state.showLoadingScreen = false;
            }).catch(error => {
                console.log(error);
            });
        },
        clearFormInputs: function() {
            this.submissionForm[1].value = '';
            this.submissionForm[2].value = '';
            this.submissionForm[3].value = '';
        },
        init: function() {
            this.submissionForm = document.querySelector('form');
        }
    },
    mounted() {
        this.init();
    }
}
</script>

<style scoped>
form, fieldset, section {
    width: 100%;
}

fieldset {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 50px;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 35px 50px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}

section {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1.75rem;
}

label, input[type="text"] {
    flex-grow: 1;
    flex-basis: 50%;
}

label {
    font-family: "Radian Light", sans-serif;
    font-size: 1.5rem;
    letter-spacing: 0.075rem;
    text-transform: uppercase;
}

input {
    font-family: "Radian", sans-serif;
    font-size: 1.25rem;
    border-radius: 10px;
    border: 1px solid #000;
}

input::placeholder {
    opacity: 0.5;
    color: #333;
    font-style: italic;
}

input[type="text"] {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
}

input[type="submit"] {
    font-size: 1.5rem;
    letter-spacing: 0.075rem;
    margin-top: 3.125rem;
    padding: 1rem 0;
    width: 100%;
    max-width: 575px;
    text-transform: uppercase;
    background-color: transparent;
    cursor: pointer;
    background-color: #000;
    color: #fff;
}

@media screen and (max-width: 758px) {
    section {
        margin-bottom: 2.75rem;
    }

    section label {
        margin-bottom: 1rem;
    }

    input[type="submit"] {
        margin-top: 1.5rem;
    }
}

@media screen and (max-width: 576px) {
    fieldset {
        padding: 0;
        border: none;
        box-shadow: none;
        background-color: transparent;
    }
}
</style>