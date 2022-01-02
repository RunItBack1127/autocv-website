<template>
    <form id="cv-submission-form" method="GET" action="https://autocv.herokuapp.com/generate">
        <fieldset>
            <input type="hidden" name="jobTitleStart" value="Web">
            <input type="hidden" name="jobTitleEnd" value="Developer">

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
export default {
    name: 'SubmissionForm',
    data() {
        return {
            submissionForm: null
        }
    },
    methods: {
        handleFormSubmit: function(event) {
            event.preventDefault();

            const jobTitle = this.submissionForm[4].value;
            [this.submissionForm[1].value, this.submissionForm[2].value] =
                jobTitle.split(" ");
            this.submissionForm.submit();
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