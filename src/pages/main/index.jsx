import { useState } from "react"
import Text from "../../elements/text"
import Input from "../../elements/input"
import Label from "../../elements/label"
import dayName from "../../utils/day"
import monthName from "../../utils/month"
import { Button, Checkbox } from "@mui/material"

const Main = () => {
  const [periode, setPeriode] = useState(null)
  const [selected, setSelected] = useState(false)
  const [inputDays, setInputDays] = useState(null)
  const [timeResult, setTimeResult] = useState(null)
  const [hideInputValue, sethideInputValue] = useState(false)

  const handleChange = (value) => {
    setSelected(value)
    setTimeResult(null)
  }

  const handleInputDays = (event) => {
    setInputDays(event.target.value)
    sethideInputValue(false)
    setTimeResult(null)
  }

  const handleSearch = () => {
    if (selected) {
      const daysValue = inputDays
      const daysMilisecond = parseInt(daysValue) * 86400000

      if (isNaN(daysMilisecond)) {
        setTimeResult("Oops! Invalid To Search Date.")
        return
      }

      let time
      if (selected === "future") {
        time = new Date().getTime() + daysMilisecond
        setPeriode("future")
      } else if (selected === "past") {
        time = new Date().getTime() - daysMilisecond
        setPeriode("past")
      } else {
        setTimeResult("Oops! Invalid To Search Date.")
        return
      }

      setSelected(false)
      setTimeResult(time)
      sethideInputValue(true)
    }
  }

  const textInfoResult = (days, periode, time) => {
    if (!days || !periode || !time) return ""

    const resultDate = new Date(time)

    const day = dayName[resultDate.getDay()]
    const date = resultDate.getDate()
    const month = monthName[resultDate.getMonth()]
    const year = resultDate.getFullYear()

    return `After ${days} days ${periode}, the exact date will be ${day}. ${date} ${month} ${year}`
  }

  const description = textInfoResult(inputDays, periode, timeResult)
  const daysResultInfo = description.substring(0, (description.indexOf(". ") + 1))
  const dateResultInfo = description.substring(description.indexOf(". ") + 2)

  return (
    <>
      <header className="search-date-title">
        <Text type="h1" className="search-date-title-text" text="SEARCH DATE" />
        <Text
          type="p"
          className="search-date-title-text"
          text="This tool is useful for checking dates from several days into the future or days that have passed, according to what is entered in the input."
        />
      </header>
      <main className="search-date">
        <div className="search-date-component">
          <div className="search-date-to-future">
            <Checkbox
              name="future"
              checked={selected === "future"}
              onChange={() => handleChange("future")}
              size="small"
            />
            <Label htmlFor="future" text="Days Into the Future" />
          </div>
          <div className="search-date-to-past">
            <Checkbox
              name="past"
              checked={selected === "past"}
              onChange={() => handleChange("past")}
              size="small"
            />
            <Label htmlFor="future" text="Days to the Past" />
          </div>
          <div className="search-date-number">
            <div className="search-date-input">
              <Label htmlFor="days" text="Number of Days to Go" />
              <Input
                className="days-input"
                onChange={handleInputDays}
                value={hideInputValue ? "" : inputDays}
                type="text"
                min="0"
                maxLength="5"
                name="days"
                onInput={(e) =>
                  (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
                }
                autoComplete="off"
              />
              <Button type="button" className="button-search-date group" variant="contained" onClick={handleSearch}>
                <Text type="span" className="button-search-date-text" text="Search" />
              </Button>
            </div>
          </div>
        </div>
        <div className="search-date-result">
          {timeResult && (
            <>
              <Text type="p" className="search-date-result-days-info" text={ daysResultInfo } />
              <Text type="p" className="search-date-result-date-info" text={ dateResultInfo } />
            </>
          )}
        </div>
      </main>
      <footer>© 2025 Aang Solihin. All rights reserved.</footer>
    </>
  )
}

export default Main
