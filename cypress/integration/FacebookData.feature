@smoke @feature-tag @parallel:data @parallel-2
Feature: The Facebook-data

  I want to open a social network page

  @tag-to-include
  Scenario: Opening a social network page data
    Given I open Facebook page
    Then I see "Facebook" in the title

  @another-tag-to-include @some-other-tag
  Scenario: Different kind of opening data
    Given I kinda open Facebook page
    Then I am very happy
