package com.jh.p.board.dao;

import org.apache.ibatis.session.SqlSession;

import java.util.List;

import javax.inject.Inject;

import com.jh.p.board.vo.BoardVo;

import org.springframework.stereotype.Repository;

@Repository
public class BoardDao implements IBoardDao{

    @Inject
	private SqlSession sqlSession;
	
	@Override
    public void boardInsert(BoardVo board) {
		sqlSession.insert("board.insert", board);
	}

    @Override
	public int boardModify(BoardVo board) {
		return sqlSession.update("board.modify", board);
	}

    @Override
	public BoardVo boardSelect(int bno) {
		return sqlSession.selectOne("board.search", bno);
	}

    @Override
	public void boardDelete(int bno) {
		sqlSession.insert("board.delete", bno);
	}


	@Override
	public List<BoardVo> boardListAll() throws Exception {
		return sqlSession.selectList("board.listAll");
	}

	@Override
	public void increaseViewcnt(int bno) throws Exception {
		sqlSession.update("board.increaseViewcnt", bno);
    }
    
}