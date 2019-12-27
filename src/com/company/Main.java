package com.company;

import java.util.Arrays;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        // write your code here
        Scanner in = new Scanner(System.in);
        String sentence = in.nextLine();
        getAverageLengthOfWords(sentence);
    }

    public static void getAverageLengthOfWords(String sentence) {
        String[] words = sentence.split("\\s+");
        Arrays.setAll(words, i -> words[i].replaceAll("[^\\w]", ""));
        for (String word : words) {
            System.out.println("\"" + word + "\": " + word.length());
        }
        double lengthSum = Arrays.stream(words).mapToInt(String::length).sum();
        System.out.println("Total length: " + lengthSum);
        System.out.println("Total number of words: " + words.length);
        System.out.println("Average length of words: " + lengthSum / words.length);
    }
}
