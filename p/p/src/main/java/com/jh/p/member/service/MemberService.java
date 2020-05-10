package com.jh.p.member.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jh.p.member.vo.MemberVo;
import com.jh.p.member.dao.MemberDao;

@Service
public class MemberService implements IMemberService {
	
	@Autowired
	MemberDao dao;
	
	@Override
	public void memberRegister(MemberVo member) {
		dao.memberInsert(member);
	}

	@Override
	public MemberVo memberSearch(MemberVo member) {
		MemberVo mem = dao.memberSelect(member);
		if (mem == null) {
			System.out.println("Login Fail!!");
		} else {
			System.out.println("Login Success!!");
		}
		return mem;
	}

	@Override
	public int memberModify(MemberVo member) {
		return dao.memberModify(member);
	}

}