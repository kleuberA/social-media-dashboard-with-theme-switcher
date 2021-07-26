const numberFollow = $('.numberFollows');
const darkMode = $('.darkMode');
const navbar = $('.navbar');
const title = $('.titlePrincipal');
const comment = $('.comment');
const socialFacebook = $('.socialFacebook');
const socialTwitter = $('.socialTwitter');
const socialInstagram = $('.socialInstagram');
const socialYoutube = $('.socialYoutube');
const contact = $('.contactSocial');
const pageView = $('.containerPageViews');
const titleOver = $('.titleOverviewToday');
const body = $('[data-body]');
const likesFacebook = $('.containerLikesFacebook');
const likesInstagram = $('.containerLikesInstagram');
const profileInstagram = $('.containerProfileInstagram');
const retweets = $('.containerRetweetsTwitter');
const likesTwitter = $('.containerLikesTwitter');
const likeYoutube = $('.containerLikesYoutube');
const totalViews = $('.containerTotalViewsYoutube');
const containerProfile = $('.containerProfileInstagram');
const newFollows = $('.newFollows');
darkMode.on('click',() => {
	if($(darkMode).is(':checked')){
		numberFollow.each(function (i) {
			$(this).addClass('numberFollowsDarkMode');
			navbar.addClass('navbarDarkMode');
			title.addClass('titlePrincipalDarkMode');
			comment.addClass('commentDarkMode');
			socialFacebook.addClass('socialFacebookDarkMode');
			socialTwitter.addClass('socialTwitterDarkMode');
			socialInstagram.addClass('socialInstagramDarkMode');
			socialYoutube.addClass('socialYoutubeDarkMode');
			contact.addClass('contactSocialDarkMode');
			pageView.addClass('containerPageViewsDarkMode');
			titleOver.addClass('titleOverviewTodayDarkMode');
			body.addClass('body');
			likesFacebook.addClass('containerLikesFacebookDarkMode');
			likesInstagram.addClass('containerLikesInstagramDarkMode');
			profileInstagram.addClass('profileInstagramDarkMode');
			retweets.addClass('containerRetweetsTwitterDarkMode');
			likesTwitter.addClass('containerLikesTwitterDarkMode');
			likeYoutube.addClass('containerLikesYoutubeDarkMode');
			totalViews.addClass('containerTotalViewsYoutubeDarkMode');
			containerProfile.addClass('containerProfileInstagramDarkMode');
			newFollows.addClass('newFollowsDarkMode');
		})
		
	}else{
		numberFollow.each(function (i) {
			$(this).removeClass('numberFollowsDarkMode');
			navbar.removeClass('navbarDarkMode');
			comment.removeClass('commentDarkMode');
			title.removeClass('titlePrincipalDarkMode');
			socialFacebook.removeClass('socialFacebookDarkMode');
			socialTwitter.removeClass('socialTwitterDarkMode');
			socialInstagram.removeClass('socialInstagramDarkMode');
			socialYoutube.removeClass('socialYoutubeDarkMode');
			contact.removeClass('contactSocialDarkMode');
			pageView.removeClass('containerPageViewsDarkMode');
			titleOver.removeClass('titleOverviewTodayDarkMode');
			body.removeClass('body');
			likesFacebook.removeClass('containerLikesFacebookDarkMode');
			likesInstagram.removeClass('containerLikesInstagramDarkMode');
			profileInstagram.removeClass('profileInstagramDarkMode');
			retweets.removeClass('containerRetweetsTwitterDarkMode');
			likesTwitter.removeClass('containerLikesTwitterDarkMode');
			likeYoutube.removeClass('containerLikesYoutubeDarkMode');
			totalViews.removeClass('containerTotalViewsYoutubeDarkMode');
			containerProfile.removeClass('containerProfileInstagramDarkMode');
			newFollows.removeClass('newFollowsDarkMode');
		})
	}
	
})