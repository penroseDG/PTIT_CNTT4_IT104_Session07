class Post {
    public id: number;
    public likes: number[];
    public comments: { userId: number, content: string }[];
    public userId: number;
    public content: string;

    constructor(id: number, userId: number, content: string) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.likes = [];
        this.comments = [];
    }

    addLike(userId: number): void {
        if (this.likes.find(uid => uid === userId)) {
            console.log(`Người dùng ${userId} đã thích bài này rồi.`);
            return;
        }
        this.likes.push(userId);
    }

    addComment(comment: { userId: number, content: string }): void {
        this.comments.push(comment);
    }
}

class User {
    public id: number;
    public posts: Post[];
    public followers: User[];

    constructor(id: number) {
        this.id = id;
        this.posts = [];
        this.followers = [];
    }
    createPost(content: string): void {
        const postId = this.posts.length + 1;
        const newPost = new Post(postId, this.id, content);
        this.posts.push(newPost);
        console.log(`Người dùng ${this.id} đã tạo bài đăng #${postId}`);
    }
    comment(postId: number, commentContent: string): void {
        for (const user of this.followers) {
            const post = user.posts.find(p => p.id === postId);
            if (post) {
                post.addComment({ userId: this.id, content: commentContent });
                console.log(`Người dùng ${this.id} đã bình luận vào bài #${postId} của ${user.id}`);
                return;
            }
        }
        console.log("Không tìm thấy bài đăng để bình luận.");
    }

    follow(user: User): void {
        if (this.followers.find(f => f.id === user.id)) {
            console.log(`Người dùng ${this.id} đã theo dõi ${user.id} rồi.`);
            return;
        }
        this.followers.push(user);
        console.log(`Người dùng ${this.id} đã theo dõi ${user.id}`);
    }

    likePost(postId: number): void {
        for (const user of this.followers) {
            const post = user.posts.find(p => p.id === postId);
            if (post) {
                post.addLike(this.id);
                console.log(`Người dùng ${this.id} đã thích bài #${postId} của ${user.id}`);
                return;
            }
        }
        console.log("Không tìm thấy bài đăng để thích.");
    }

    viewFeed(): void {
        for (const user of this.followers) {
            for (const post of user.posts) {
                console.log(`Bài #${post.id} từ ${user.id}: ${post.content}`);
                console.log(` Likes: ${post.likes.length},Comments: ${post.comments.length}`);
            }
        }
    }
}
const user1 = new User(1);
const user2 = new User(2);
const user3 = new User(3);

user1.follow(user2);
user1.follow(user3);

user2.createPost("Duvip@");
user3.createPost("vipromax!");

user1.viewFeed();

user1.likePost(1);
user1.comment(1, "Chuẩn quá!");
user1.viewFeed();
