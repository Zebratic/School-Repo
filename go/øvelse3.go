package main

import "fmt"

func primtal(x int) {
	for i := 2; i <= x; i++ {
		for j := 2; j <= i; j++ {
			if i == j {
				fmt.Println(i)
			}
			if i%j == 0 {
				break
			}
		}
	}
}

func main() {
	primtal(10000)
}
