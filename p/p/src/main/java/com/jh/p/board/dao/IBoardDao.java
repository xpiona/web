package com.jh.p.board.dao;

import java.util.List;

import com.jh.p.board.vo.BoardVo;

public interface IBoardDao {
    void boardInsert(BoardVo board) throws Exception;
    void boardDelete(int bno) throws Exception;
    int boardModify(BoardVo board) throws Exception;
	BoardVo boardSelect(int bno) throws Exception;
	
	List<BoardVo> boardListAll() throws Exception;
	void increaseViewcnt(int bno) throws Exception;
	
	
	//Object delete(String queryId, Object params);
}