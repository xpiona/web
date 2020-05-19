package com.jh.p.member.service;

import com.jh.p.member.vo.MemberVo;

public interface IMemberService {
	void memberRegister(MemberVo member);
	MemberVo memberSearch(MemberVo member);
	int memberModify(MemberVo member);
	void memberDelete(MemberVo member);
}