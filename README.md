# Responsive Table [![CircleCI](https://circleci.com/gh/peter-mouland/responsive-table/tree/master.svg?style=svg)](https://circleci.com/gh/peter-mouland/responsive-table/tree/master)

> Demo showing how to build a fully responsive Table

http://responsive-table.herokuapp.com

This demo will use CSS and html attributes to ensure a data tables are readable
on small screens.

## Notes:
 
 1. the design seems to be a wire frame so not too much time has been spent on getting each browser to match this design.
   * you will see that the page looks as requested until ie 9 (which is unsupported by windows and in use by onw xp and Win 7 customers)
   * to get better support i would include css overrides for old-ie browser in order to keep bad-styles away from `standards` styles
   * I would like to know about the real design via a quick session with the product owner and designer to find out the design and functional requirements.
 2.  I have not implemented the next/previous buttons to display the next account.
   * this would be quick to add if required, but i gather there is plenty of JS in this app
 3. no mention as to the JSON feed was given
   * I am assuming the feed is a normalised data-set as this makes it easier to work with
 4. no mention of breakpoints have been given
    * I have assumed a break point of 768px for the table to change design
    * This is because any smaller than this screen size and the table looks cramped 
    * i.e. this is the point at which the design breaks
 5. no mention of authorisation has been mentioned
    * I assume that because these savings accounts are for information only, no login is required.
 
  