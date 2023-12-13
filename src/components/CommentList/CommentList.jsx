import Votes from "../Votes/Votes";
import PropType from 'prop-types'

const CommentList = ({comments}) => {
  return (
    <div>
      <h3 className="font-bold text-xl">
        Komentar({comments?.length})
      </h3>
      {comments?.map((comment) => (
        <div key={comment?.id} className="border-b-2 py-2 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img
              src={comment?.owner?.avatar}
              alt=""
              className="rounded-full w-8 h-8"
            />
            <div className="font-bold">{comment?.owner?.name}</div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: comment?.content }} />
          <Votes
            upVotes={comment?.upVotesBy?.length}
            downVotes={comment?.downVotesBy.length}
          />
        </div>
      ))}
    </div>
  );
};

export default CommentList;

CommentList.propTypes = {
  comments: PropType.array
}