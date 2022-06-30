@feature-tag @github-tag @parallel:data @parallel-4
Feature: The Github data

  I want to GitHub Things

  @tag-to-include
  Scenario: Opening GitHub data
    Given I open GitHub page
    Then I see "GitHub" in the title

  @another-tag-to-include
  Scenario: Opening GitHub again data
    Given I open GitHub page
    Then I see "GitHub" in the title
