


export const CommonRegex = {
    phone: {
        label: "phone number",
        regex: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
    },

    email: {
        label: "email",
        regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    }
}
