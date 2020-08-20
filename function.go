package main

import (
	"strconv"
)

func indiaPopulationOverYears(countryData []Population, country string, startingYear float64, endingYear float64) map[string]float64 {

	indiaPopulationOverYears := make(map[string]float64)
	for _, data := range countryData {
		year, _ := strconv.Atoi(data.Year)
		population, _ := strconv.ParseFloat(data.Population, 64)

		if data.Region == country && year >= 2005 && year <= 2015 {
			indiaPopulationOverYears[data.Year] = population
		}
	}
	return indiaPopulationOverYears
}
func populationOfAseanCountries(aseanCountries []string, countryData []Population, year float64) map[string]float64 {
	populationOfAseanCountries := make(map[string]float64)
	for _, data := range countryData {
		dataYear, _ := strconv.ParseFloat(data.Year, 64)
		if dataYear == year {
			if findItem(aseanCountries, data.Region) {
				population, _ := strconv.ParseFloat(data.Population, 64)
				populationOfAseanCountries[data.Region] = population
			}
		}
	}
	return populationOfAseanCountries
}

func sarracCountriesPopulation(saarcCountries []string, countryData []Population, startingYear float64, endingYear float64) map[string]float64 {
	sarracCountriesPopulation := make(map[string]float64)
	for _, data := range countryData {
		year, _ := strconv.ParseFloat(data.Year, 64)
		if year >= startingYear && year <= endingYear {
			if findItem(saarcCountries, data.Region) {
				value, _ := strconv.ParseFloat(data.Population, 64)
				sarracCountriesPopulation[data.Year] += value
			}
		}
	}
	return sarracCountriesPopulation
}
func aseanPopulationVsYears(countryData []Population, aseanCountries []string, startingYearTask4 float64, endingYearTask4 float64) map[string][]float64 {
	aseanPopulationVsYears := make(map[string][]float64)
	for _, data := range countryData {
		year, _ := strconv.ParseFloat(data.Year, 64)
		if year >= startingYearTask4 && year <= endingYearTask4 {
			if findItem(aseanCountries, data.Region) {
				population, _ := strconv.ParseFloat(data.Population, 64)
				aseanPopulationVsYears[data.Region] = append(aseanPopulationVsYears[data.Region], population)
			}
		}
	}
	return aseanPopulationVsYears
}

func findItem(countries []string, country string) bool {
	for _, item := range countries {
		if item == country {
			return true
		}
	}
	return false
}
