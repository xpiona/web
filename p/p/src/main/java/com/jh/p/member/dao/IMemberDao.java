package com.jh.p.member.dao;

import com.jh.p.member.vo.MemberVo;

public interface IMemberDao {
	void memberInsert(MemberVo member);
	int memberModify(MemberVo member);
	MemberVo memberSelect(MemberVo member);
}