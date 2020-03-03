# Title of Design

todo: pick a title for the project

VizTeam 31

Furong Guo || Yaping Ren || Yizhen Zhao 

# Type of project

 todo: Main focus of this project, information visualization or information analytics
 
# Description

 todo: Add short description to the project.

# Meeting minutes
[Feb.13th](#13th-feb)
[Feb.20th](#20th-feb)
[Feb.23rd](#group-discussion-23rd-feb)
[Feb.26th](#26th-feb)


## 13th Feb 

##### Key points discussed - Brief discussion on project ideas

	- Project idea 1

 	 **Art work recommendation system**
  
   	 - Based on personal preference
    
  	  - Recommendation based on art work metadata and annotated data
    
   	 - Interactive system
    
  	  - Collaborative filtering 
    
	- Project idea 2

	  **Amsterdam living area recommendation for family with children**

	    - Query response app
    
  	  - Recommended area light up according to user preference. (e.g. park and public transportation)
    
   	 - Need cool design features
    
	- Project idea 3

	  **Art analysis assistant - theme linked to objects changing over time**
  
	  - Annotations might be useful: genre, style, century. Concepts and objects
  
  	[reference: how to analyze an artwork](https://www.studentartguide.com/articles/how-to-analyze-an-artwork)
  
 ##### Issue 
 
 	 - Identify differences of information visualization and Information analytics 
 
 ##### Working plan
 
  	- By 18th Feb., build sketch of each project ideas.
 	 - Determine key features needs to be visualized. 
  
  
# Meeting minutes

## 20th Feb 

##### project theme:
	portrait filter
 	feature example: facial expression / gender / position
	
##### Task for this week
	extract feature from portraits (around 15k items) by 23rd Feb.
	create prototype of the filters by 25th Feb.
	basic visualization design of the site by 25th Feb.

##### Reference:
	Omnieyes
	Omniart eyes 

##### Tool:	
	Pytorch
	Opencv

## Group discussion 23rd Feb

##### dataset change
	use wikiart emotion dataset
	reference link: http://saifmohammad.com/WebPages/wikiartemotions.html
	
	selected variables
		General feature of painting
			category
			Year
			artist nationality (to be extracted from external links)
			
		Portrait feature
			Face or Body
			Sentiment
				positive
				negative
				mixed
			Mouth (to be extracted from painting)
				open / closed / can't decide
			Pose  (to be extracted from painting)
				turn left / turn right

# Meeting minutes

## 26th Feb 

##### Task for this week

	1. Extract features on faces of artworks.
	2. Make a functionality visualization prototype of our project before 4,Mar.
	
#### Reference 
	Facial landmark detection:
	https://github.com/timesler/facenet-pytorch
