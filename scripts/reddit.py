#!/usr/bin/python
import praw
import pdb
import re
import os
import json
import time
import text_generation

# == Don't need for now
# cred = json.load(open("login.json"))

# Create the Reddit instance
bots = ['bot1', 'bot2']
# and login
# reddit.login(cred["reddit"]["0"]["username"], cred["reddit"]["0"]["password"])

def make_comment(sub, search, reply):
    # create reddit bot instance
    reddit = praw.Reddit(bots[0])
    
    # Get the top 5 values from our subreddit
    subreddit = reddit.subreddit(sub)
    for submission in subreddit.hot(limit=10):
        # Do a case insensitive search
        if re.search(search, submission.title, re.IGNORECASE):
            # Reply to the post
            submission.reply(reply)
            print("Bot replying to : ", submission.title)

            # Store the current id into our list
            # posts_replied_to.append(submission.id)

def make_post(sub, title, body):
    # create reddit bot instance
    reddit = praw.Reddit(bots[0])

    # Get the top 5 values from our subreddit
    subreddit = reddit.subreddit(sub)
    submission = subreddit.submit(title, body)
    # == clears initial upvote
    # submission.clear_vote()

title, body = text_generation.getPostText()
print title
print body
make_post(reddit_bot1, 'xdeals', title, body)
time.sleep(3)
make_comment(reddit_bot2, 'xdeals', title, 'Really cool idea and product! I just bought a super cheap watch!')