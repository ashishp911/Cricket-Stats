package model


type Test struct {
	Player        string `json:"player"`
	PlayedMatches int    `json:"playedMatches"`
	Inning        int    `json:"innings"`
	NumberOfRuns  int    `json:"runs"`
	HighestScore  int    `json:"highestScore"`
}
