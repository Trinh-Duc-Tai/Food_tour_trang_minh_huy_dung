
let getplanmeal = document.getElementById("get-plan");
getplanmeal.addEventListener("click", ()=>{
    document.location.href = "../html/page3Type6.html";
})
const quotes1 = [
    {
        quotes:'Good things come to those who sweat.',
        au: 'Anonymous',
    },
    {
        quotes: 'The reason I exercise is for the quality of life I enjoy.',
        au: 'Kenneth H. Cooper',
    },
    {
        quotes: 'The only bad workout is the one that didn’t happen.',
        au: 'Anonymous',
    },
    {
        quotes: 'Exercise is a celebration of what your body can do. Not a punishment for what you ate.',
        au: 'Anonymous',
    },
    {
        quotes: 'Daily exercise is one of the keys to excellent health.',
        au: 'ATGW',
    },
    {
        quotes: 'The pain you feel today will be the strength you feel tomorrow.',
        au: 'Anonymous',
    },
    {
        quotes: 'Make every workout count.',
        au: 'Anonymous',
    },
    {
        quotes: 'For me, exercise is more than just physical – it’s therapeutic.',
        au: 'Anonymous',
    },
    {
        quotes: 'Once you see results, it becomes an addiction.',
        au: 'Anonymous',
    },
    {
        quotes: 'Don’t wish for a good body, work for it.',
        au: 'Anonymous',
    },
    {
        quotes: 'Sweat is just fat crying.',
        au: 'Anonymous',
    },
    {
        quotes: 'Exercise, my natural high.',
        au: 'Anonymous',
    },
    {
        quotes: 'You have to exercise, or at some point you’ll just break down.',
        au: 'Barack Obama',
    },
    {
        quotes: 'Running is not just exercise; it is a lifestyle.',
        au: 'John Bingham',
    },
    {
        quotes: 'The body achieves what the mind believes.',
        au: 'Anonymous',
    },
    {
        quotes: 'Once you are doing exercise regularly, the hardest thing is to stop it.',
        au: 'Erin Gray',
    },
    {
        quotes: 'If it doesn’t challenge you, it doesn’t change you.',
        au: 'Anonymous',
    },
    {
        quotes: 'If you don’t make time for exercise, you’ll probably have to make time for illness.',
        au: 'Robin Sharma',
    },
    {
        quotes: 'Take care of your body. It’s the only place you have to live in.',
        au: 'Jim Rohn',
    },
    {
        quotes: 'A one-hour workout is 4% of your day. No excuses.',
        au: 'Anonymous',
    },
    {
        quotes: 'Every workout counts even if it’s only for 15 minutes. Just do it.',
        au: 'Anonymous',
    },
    {
        quotes: 'Exercise more. Soon, it’s going to feel amazing.',
        au: 'Anonymous',
    },
    {
        quotes: 'Today I will love myself enough to exercise.',
        au: 'Anonymous',
    },
    {
        quotes: 'Walking is the best possible exercise. Habituate yourself to walk very far.',
        au: 'Thomas Jefferson',
    },
    {
        quotes: 'Fitness starts in your head. You must choose to eat clean, exercise regularly, and treat your body with respect.',
        au: 'Anonymous',
    },
    {
        quotes: 'Exercise to have fun and be healthy, not just to lose weight.',
        au: 'Anonymous',
    },
    {
        quotes: 'I’m addicted to exercising and I have to do something every day.',
        au: 'Arnold Schwarzenegger',
    },
    {
        quotes: 'Exercise is therapy.',
        au: 'Anonymous',
    },
    {
        quotes: 'Remember that any exercise is better than no exercise.',
        au: 'Anonymous',
    },
    {
        quotes: 'Exercise as soon as you get up, you will see what a difference it makes to your life.',
        au: 'ATGW',
    },
    {
        quotes: 'Exercise equals endorphins. Endorphins make you happy.',
        au: 'Anonymous',
    },
    {
        quotes: 'To enjoy the glow of good health, you must exercise.',
        au: 'Gene Tunney',
    }
]

let quoteshtml = document.getElementById(`quotes`);
let auhtml = document.getElementById(`au`);

function randomquotes() {
    let a = Math.floor((Math.random() * quotes1.length));
    quoteshtml.innerHTML = `${quotes1[a].quotes}`;
    auhtml.innerHTML = `- - ${quotes1[a].au} - -`;
    setTimeout(randomquotes, 1000*30);
}
randomquotes();
