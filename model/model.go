package model

type T20 struct {
	Player        string  `json:"player"`
	PlayedMatches int     `json:"played_matches"`
	Inning        int     `json:"inning"`
	NumberOfRuns  int     `json:"number_of_runs"`
	HighestScore  int     `json:"highest_score"`
	TotalAverage  float64 `json:"total_average"`
}

type ODI struct {
	Player        string  `json:"player"`
	PlayedMatches int     `json:"played_matches"`
	Inning        int     `json:"inning"`
	NumberOfRuns  int     `json:"number_of_runs"`
	HighestScore  int     `json:"highest_score"`
	TotalAverage  float64 `json:"total_average"`
}

type TEST struct {
	Player        string  `json:"player"`
	PlayedMatches int     `json:"played_matches"`
	Inning        int     `json:"inning"`
	NumberOfRuns  int     `json:"number_of_runs"`
	HighestScore  int     `json:"highest_score"`
	TotalAverage  float64 `json:"total_average"`
}
