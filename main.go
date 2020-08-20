package main

import (
	"encoding/csv"
	"encoding/json"
	"log"
	"os"
)

type Population struct {
	Region      string
	CountryCode string
	Year        string
	Population  string
}

func main() {
	var countryData []Population
	filePath := "./population-estimates_csv.csv"
	openFile, err := os.Open(filePath)
	if err != nil {
		log.Fatal(err)
	}
	fileData, err := csv.NewReader(openFile).ReadAll()
	if err != nil {
		log.Fatal(err)
	}
	for _, data := range fileData {
		countryData = append(countryData, Population{
			Region:      data[0],
			CountryCode: data[1],
			Year:        data[2],
			Population:  data[3],
		})
	}
	task(countryData)

}
func task(countryData []Population) {

	country := "India"
	startingYear := float64(2005)
	endingYear := float64(2015)
	startingYearTask4 := float64(2004)
	endingYearTask4 := float64(2014)
	aseanCountries := []string{"Indonesia", "Thailand", "Singapore", "Viet Nam", "Malaysia", "Philippines", "Cambodia", "Myanmar", "Lao People's Democratic Republic", "Brunei Darussalam", "Timor-Leste"}
	saarcCountries := []string{"Afghanistan", "Bangladesh", "Bhutan", "India", "Maldives", "Nepal", "Pakistan", "Sri Lanka"}

	//task1
	task1 := indiaPopulationOverYears(countryData, country, startingYear, endingYear)
	jsonDataTask1, err := json.Marshal(task1)
	if err != nil {
		log.Fatal(err)
	}
	jsonFileTask1, err := os.Create("./output/indianPopulation.json")
	if err != nil {
		log.Fatal(err)
	}
	defer jsonFileTask1.Close()
	jsonFileTask1.Write(jsonDataTask1)

	//task2
	task2 := populationOfAseanCountries(aseanCountries, countryData, float64(2014))
	jsonDataTask2, err := json.Marshal(task2)
	if err != nil {
		log.Fatal(err)
	}
	jsonFileTask2, err := os.Create("./output/aseanPopulation.json")
	if err != nil {
		log.Fatal(err)
	}
	defer jsonFileTask2.Close()
	jsonFileTask2.Write(jsonDataTask2)

	// task3
	task3 := sarracCountriesPopulation(saarcCountries, countryData, startingYear, endingYear)
	jsonDataTask3, err := json.Marshal(task3)
	if err != nil {
		log.Fatal(err)
	}
	jsonFileTask3, err := os.Create("./output/sarracCountriesPopulation.json")
	if err != nil {
		log.Fatal(err)
	}
	defer jsonFileTask3.Close()
	jsonFileTask3.Write(jsonDataTask3)

	//task4
	task4 := aseanPopulationVsYears(countryData, aseanCountries, startingYearTask4, endingYearTask4)
	jsonDataTask4, err := json.Marshal(task4)
	if err != nil {
		log.Fatal(err)
	}
	jsonFileTask4, err := os.Create("./output/aseanPopulationVsYears.json")
	if err != nil {
		log.Fatal(err)
	}
	defer jsonFileTask4.Close()
	jsonFileTask4.Write(jsonDataTask4)

}
