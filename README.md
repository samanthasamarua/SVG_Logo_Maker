# SVG Logo Maker

# Description

This is a command-line application that generates a professional SVG logo (logo.svg file). This application enables users to design and generate a simple logo for their projects for free. 

# Challenge Overview
This project aims to build a Node.js command-line application that takes in user input to generate a logo and save it as an SVG file.

# User Story

AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer


# Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered

# Installation 
The SVG logo generator requires the installation of the following:
1. Node.js
2. Inquirer npm (npm i inquirer@8.2.4)
3. Jest testing

# Usage
1. In order to use the SVG Logo maker, clone the repository to Visual Studio Code.
2. Navigate to index.js and open integrated terminal.
3. Enter "node index.js" in the command line
4. User will be presented with a series of questions which the user is required to answer. 
5. Once questions are completed, a SVG file named logo.svg will be generated. 
6. Navigate to the file logo.svg, right click and select open preview to view the generated logo. 

# Walkthrough Video Link

