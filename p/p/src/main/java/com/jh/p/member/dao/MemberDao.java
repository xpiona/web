package com.jh.p.member.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import javax.inject.Inject;

import com.jh.p.member.vo.MemberVo;

@Repository
public class MemberDao implements IMemberDao {

	@Inject
	private SqlSession sqlSession;
	
	@Override
	public void memberInsert(MemberVo member) {
		sqlSession.insert("member.insert", member);
	}

	@Override
	public int memberModify(MemberVo member) {
		return sqlSession.update("member.modify", member);
	}

	@Override
	public MemberVo memberSelect(MemberVo member) {
		return sqlSession.selectOne("member.search", member);
	}

	@Override
	public void memberDelete(MemberVo member) {
		sqlSession.insert("member.delete", member);
	}
	
}