import React from "react"
import Link from "next/link"
import styles from "./LeaveNumber.module.scss"

const initialFormValues = {
  email: "kontakt@borysnieruchomosci.pl",
  subject: "Apartamenty Wesola - kontakt",
  content: "Zostawiony numer ",
  firstName: "",
  lastName: "brak",
  phoneNumber: "",
}

const LeaveNumber = () => {
  const [checkBoxChecked, setCheckBoxChecked] = React.useState(false)
  const [formValues, setFormValues] = React.useState(initialFormValues)

  const setAllInputsEmpty = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    )

    Array.from(document.querySelectorAll('input[type="checkbox"]')).forEach(
      (input) => (input.checked = false)
    )
  }

  const handleChangeFormValues = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (formValues.firstName === "" || formValues.phoneNumber === "") {
      return alert("Proszę uzupełnić pola formularza! ")
    } else if (
      formValues.firstName.length < 2 ||
      formValues.phoneNumber.length < 8
    ) {
      return alert("Proszę poprawnie uzupełnić pola formularza! ")
    }

    fetch("https://borysnieruchomosci.pl/adminBorys/api/email", {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          if (typeof window !== "undefined") {
            setAllInputsEmpty()
          }
          alert(
            `Dziękujemy ${formValues.firstName} ! Wkrótce się do Ciebie odezwiemy `
          )
          setFormValues(initialFormValues)
        }
      })
      .catch((err) => {
        console.log("Wystapił problem")
        if (typeof window !== "undefined") {
          setAllInputsEmpty()
        }
        setFormValues(initialFormValues)
      })
  }

  return (
    <div className={styles.Wrapper}>
      <div className="content">
        <h1>
          Zostaw nam swój numer, a my odezwiemy się do Ciebie, aby przedstawić
          Ci interesującą Cię ofertę!
        </h1>
        <form className={styles.Form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            required={true}
            autoComplete="true"
            placeholder="Wpisz imię"
            onChange={handleChangeFormValues}
          />
          <input
            type="tel"
            name="phoneNumber"
            required={true}
            autoComplete="true"
            placeholder="Wpisz numer telefonu"
            onChange={handleChangeFormValues}
          />
          <div>
            <input
              className={styles.Checkbox}
              id="rodo"
              type="checkbox"
              onChange={() => setCheckBoxChecked(!checkBoxChecked)}
              value={checkBoxChecked}
            />
            <label htmlFor="rodo">
              Wyrażam zgodę na wykorzystywanie moich danych w celu przetwarzania
              mojego zgłoszenia. Informacje i pouczenie o prawie do odwołania
              zgody są zawarte w{" "}
              <a href="/rodowesola.pdf" target="_blank">
                <span className={styles.Politics}>Polityce prywatności</span>
              </a>
            </label>
          </div>
          <button disabled={checkBoxChecked ? false : true}>Wyślij</button>
        </form>
      </div>
    </div>
  )
}

export default LeaveNumber
